import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './styles';

function Pagination() {
  return (
    <div>
      <S.ContainerNavigate>
        <S.ButtonNavigation aria-label="Página anterior">
          <MdKeyboardArrowLeft />
        </S.ButtonNavigation>

        <S.ButtonNavigation aria-label="Próxima página">
          <MdKeyboardArrowRight />
        </S.ButtonNavigation>
      </S.ContainerNavigate>
    </div>
  );
}

export { Pagination };
