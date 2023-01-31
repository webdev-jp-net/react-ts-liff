/* eslint @typescript-eslint/ban-ts-comment: 0 */
import { FC, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'components/parts/Button';
import { RootState } from 'store';
import { updateDummyText } from 'store/hogefuga';

import { usePageTitle } from 'hooks/usePageTitle';

import styles from './Sub.module.scss';

// import { Hoge } from 'components/hoge';

// import { Fuga } from '@types/fuga';

// function component

export const Sub: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const { dummyText } = useSelector((state: RootState) => state.hogefuga);

  const [tmpValue, setTmpValue] = useState<string>('');

  // テキスト更新
  const updateValue = () => {
    dispatch(updateDummyText(tmpValue));
  };

  // ページタイトル
  usePageTitle(`subページ`);

  return (
    <div className={`l-page ${styles.sub}`}>
      <h1>{id} のページ</h1>
      <p>ここへページの内容を表示</p>

      <div className={styles.menu}>
        <Button
          handleClick={() => {
            navigate('/');
          }}
        >
          HOMEへ移動
        </Button>
      </div>
      <div>
        <p>文字をinputで書き換えられます</p>
        <p>{dummyText}</p>
        <input
          type="text"
          onInput={e => {
            setTmpValue(e.currentTarget.value);
          }}
        />
        <Button handleClick={updateValue}>更新</Button>
      </div>
    </div>
  );
};
