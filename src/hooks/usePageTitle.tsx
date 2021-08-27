import { useEffect } from 'react';

// ページタイトル変更
export const usePageTitle = (pageTitle: string): void => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
};
