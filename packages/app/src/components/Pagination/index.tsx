import { useMemo, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './styles';
export type PaginationProps = {
  totalReposities: number;
  perPage: number;
  callbackPageCurrent: (currentPage: number) => void;
};
function Pagination({
  perPage,
  totalReposities,
  callbackPageCurrent,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = useMemo(() => {
    return Math.round(totalReposities / perPage);
  }, []);

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage > 0) {
      setCurrentPage(previousPage);
      callbackPageCurrent(previousPage);
    }
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      setCurrentPage(nextPage);
      callbackPageCurrent(nextPage);
    }
  };

  return (
    <S.Container>
      <S.ContainerNavigate>
        <S.ButtonNavigation
          onClick={handlePreviousPage}
          aria-label="Página anterior"
        >
          <MdKeyboardArrowLeft />
        </S.ButtonNavigation>

        <S.ButtonNavigation
          onClick={handleNextPage}
          aria-label="Próxima página"
        >
          <MdKeyboardArrowRight />
        </S.ButtonNavigation>
      </S.ContainerNavigate>

      <S.Resume>{`Pág. ${currentPage} de ${totalPage}`}</S.Resume>
    </S.Container>
  );
}

export { Pagination };
