import { FC, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useParams, Link } from 'react-router-dom'

import { RootState } from 'store'
import { updateDummyText } from 'store/hogefuga'

import { usePageTitle } from 'hooks/usePageTitle'

import { Button } from 'components/parts/Button'

import styles from './Sub.module.scss'

export const Sub: FC = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const { dummyText } = useSelector((state: RootState) => state.hogefuga)

  const [tmpValue, setTmpValue] = useState<string>('')

  // テキスト更新
  const updateValue = () => {
    dispatch(updateDummyText(tmpValue))
  }

  // ページタイトル
  usePageTitle(`sub ${id} ページ`)

  return (
    <div className={styles.page} data-testid="not-found">
      <div className={styles.body}>
        <h1 className={styles.title}>{`sub ${id} ページ`}</h1>
        <p className={styles.paragraph}>ここへページの内容を表示</p>
        <hr />
        <div className={styles.field}>
          <p>文字をinputで書き換えられます</p>
          <p className={styles.preview}>{dummyText}</p>
          <input
            placeholder="更新ボタンで入力した文字が表示されます"
            type="text"
            onInput={e => {
              setTmpValue(e.currentTarget.value)
            }}
          />
          <Button handleClick={updateValue}>更新</Button>
        </div>
        <p className={styles.paragraph}>
          <Link to="/">HOMEへ移動</Link>
        </p>
      </div>
    </div>
  )
}
