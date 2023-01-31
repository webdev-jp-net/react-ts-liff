import { FC } from 'react';

// router
import { Routes, Route } from 'react-router-dom';

// pages
import { Home } from 'components/pages/Home';
import { Sub } from 'components/pages/Sub';

// layout
import { Dialog } from 'layout/dialog';

export const Private: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:id" element={<Sub />} />
      </Routes>
      <Dialog />
    </>
  );
};
