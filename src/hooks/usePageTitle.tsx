import { useEffect } from 'react'

// ページタイトル変更
export const usePageTitle = (pageTitle: string): void => {
  useEffect(() => {
    // 404のときは404タイトルを優先するので、pageTitleが空文字のときは何もしない
    if (pageTitle) document.title = pageTitle
  }, [pageTitle])
}
