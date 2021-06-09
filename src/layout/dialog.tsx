import { FC, useState, useMemo } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateOpen } from '../store/dialog';

// assets
import style from '../assets/style/layout/dialog.module.scss';

// function component
export const Dialog: FC = () => {
  const dispatch = useDispatch();

  const { isOpen, content } = useSelector((state: RootState) => state.dialog);
  const classname = useSelector((state: RootState) => state.dialog.class) ?? [];

  const [parentClass, setParentClass] = useState<string[]>([style.dialog]);

  useMemo(() => {
    setParentClass(isOpen ? [style.dialog, style.isOpen] : [style.dialog]);
  }, [isOpen]);

  return (
    <div className={parentClass.join(' ')}>
      <div className={style.screen}></div>
      <div className={[style.content, style.basic, ...classname].join(' ')}>
        <div className={style.detail}>
          {content}
          <button
            className={style.button}
            type="button"
            onClick={() => dispatch(updateOpen(false))}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
