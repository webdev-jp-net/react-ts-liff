import { useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'

import { LiffMockPlugin } from '@line/liff-mock'

import liff from '@line/liff'
import getDecodedIDToken from '@line/liff/get-decoded-id-token'
import IsInClientModule from '@line/liff/is-in-client'
import IsInClient from '@line/liff/is-in-client'
import IsLoggedIn from '@line/liff/is-logged-in'
import Login from '@line/liff/login'
import { updateUserId } from 'store/user'

liff.use(new LiffMockPlugin())
liff.use(new Login())
liff.use(new IsLoggedIn())
liff.use(new IsInClientModule())
liff.use(new IsInClient())
liff.use(new getDecodedIDToken())

// type
type QueryStatus = {
  response: string
  loading: boolean
  error: string
}

// Liffアプリ初期化
export const useAuthLiff = (): QueryStatus => {
  const dispatch = useDispatch()

  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // LIFFにログインする
  const liffId = import.meta.env.VITE_LIFF_ID as string
  const actLoginLiff = useCallback(() => {
    setLoading(true) // 処理開始
    try {
      liff
        .init({ liffId, mock: true })
        // .init({ liffId, mock: import.meta.MODE === 'development' })
        .then(() => {
          // LIFFブラウザで起動していない場合はLINEログインする
          if (!liff.isInClient() && !liff.isLoggedIn()) liff.login({})

          // LINE ユーザIDをstoreへ保存
          const decodeIdToken = liff.getDecodedIDToken()
          if (decodeIdToken?.sub) {
            const userId = decodeIdToken.sub
            dispatch(updateUserId(userId))
            setResponse(userId)
            setLoading(false) // 処理終了
          } else {
            setError('ユーザIDの取得に失敗しました')
            setLoading(false) // 処理終了
          }
        })
        .catch(err => {
          setError(err)
          setLoading(false) // 処理終了
        })
    } catch (err) {
      alert(`LIFF initialize failed ${err}`)
    }
  }, [dispatch, liffId])

  // ページを表示したとき
  const forLineApp = useCallback(() => {
    if (!response && !loading) actLoginLiff()
  }, [response, loading, actLoginLiff])
  // LINEアプリからLIFFを起動したときaddEventListenerから呼出さないと実行できない
  window.addEventListener('load', forLineApp, { once: true })

  // 戻り値
  return { response, loading, error }
}
