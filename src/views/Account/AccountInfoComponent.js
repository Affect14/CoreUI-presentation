import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CContainer,
  CHeader,
  CRow,
} from "@coreui/react";
import Range from "../forms/range/Range";
const {
  default: ChecksRadios,
} = require("../forms/checks-radios/ChecksRadios");
const { default: Select } = require("../forms/select/Select");

const AccountInfoComponent = () => {
  return (
    <>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10} lg={7} xl={9}>
            <CCard className=" mx-4 mb-3">
              <CCardBody className="d-flex flex-column gap-1">
                <CCardTitle>Личные данные</CCardTitle>
                <CContainer>
                  Фамилия пользователя:&nbsp;
                  <span className="fw-bolder">Иван</span>
                </CContainer>
                <CContainer>
                  Имя пользователя: &nbsp;
                  <span className="fw-bolder">Иванов</span>
                </CContainer>
                <CContainer>
                  Отчество пользователя: &nbsp;
                  <span className="fw-bolder">Иванович</span>
                </CContainer>
                <CContainer>
                  Адрес электронной почты пользователя: &nbsp;
                  <span className="fw-bolder">ivan@example.com</span>
                </CContainer>
                <CContainer>
                  Должность пользователя: &nbsp;
                  <span className="fw-bolder">SMM - директор</span>
                </CContainer>
                <CContainer>
                  Наименование компании пользователя: &nbsp;
                  <span className="fw-bolder">
                    "ООО" Специальное отделение по специальным делам
                  </span>
                </CContainer>
                <CContainer>
                  Наименование подразделения компании: &nbsp;
                  <span className="fw-bolder">
                    Подразделение по особым специальным делам
                  </span>
                </CContainer>
              </CCardBody>
            </CCard>
            <CCard className=" mx-4 mb-3">
              <CCardBody>
                <CButtonGroup>
                  <CButton href="#/profile/options">Настройки аккаунта</CButton>
                  <CButton href="#/profile/history">История операций</CButton>
                </CButtonGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};
export default AccountInfoComponent;
