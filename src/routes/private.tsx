import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import { Sub } from 'components/pages/Sub';

export const Private: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:id" element={<Sub />} />
      </Routes>
    </>
  );
};
