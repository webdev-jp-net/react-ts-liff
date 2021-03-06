/* eslint @typescript-eslint/ban-ts-comment: 0 */
import React, { FC, useState } from 'react';

// router
import { useNavigate, useParams } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateDummyText } from '../store/hogefuga';

// hooks
import { usePageTitle } from '../hooks/usePageTitle';

// assets
import style from '../assets/style/pages/sub.module.scss';

// component
// import { Hoge } from '../components/hoge';

// type
// import { Fuga } from '../@types/fuga';

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
    <div className={`l-page ${style.sub}`}>
      <h1>{id} のページ</h1>
      <p>ここへページの内容を表示</p>
      <button
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        HOMEへ移動
      </button>
      <div>
        <p>{dummyText}</p>
        <input
          type="text"
          onInput={e => {
            setTmpValue(e.currentTarget.value);
          }}
        />
        <button type="button" onClick={updateValue}>
          ダミーテキスト更新
        </button>
      </div>
    </div>
  );
};
