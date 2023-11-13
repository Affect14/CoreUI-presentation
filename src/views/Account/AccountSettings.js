import {
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormRange,
  CFormSelect,
  CHeader,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import React, { useState } from "react";

const AccountSettings = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <CContainer>
      <CCard className="mx-4 mb-4">
        <CCardBody>
          <CCardTitle>Изменение личных данных</CCardTitle>
          <CForm
            className="row g-3 needs-validation p-2 mt-0"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={4}>
              <CFormInput
                type="text"
                defaultValue="Иван"
                id="validationCustom01"
                label="Имя пользователя"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                defaultValue="Иванов"
                id="validationCustom02"
                label="Фамилия пользователя"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                aria-describedby="inputGroupPrependFeedback"
                id="validationCustomUsername"
                defaultValue="Иванович"
                label="Отчество пользователя"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="validationCustomUsername">
                Адрес электронной почты пользователя
              </CFormLabel>
              <CInputGroup className="has-validation">
                <CFormInput
                  type="text"
                  aria-describedby="inputGroupPrependFeedback"
                  id="validationCustomUsername"
                  defaultValue="ivanov"
                  required
                />
                <CInputGroupText>@</CInputGroupText>
                <CFormInput
                  type="text"
                  aria-describedby="inputGroupPrependFeedback"
                  defaultValue="example.com"
                  id="validationCustomUsername"
                  required
                />
              </CInputGroup>
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                aria-describedby="inputGroupPrependFeedback"
                defaultValue="SMM - директор"
                id="validationCustomUsername"
                label="Должность пользователя"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                defaultValue='"ООО" Специальное отделение по специальным делам'
                label="Наименование компании пользователя"
                required
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                type="text"
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                defaultValue="Подразделение по особым специальным делам"
                label="Наименование подразделения компании"
                required
              />
            </CCol>
            <CCol xs={12}>
              <CButton color="primary" type="submit">
                Сохранить
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard className="mx-4 mb-4">
        <CCardBody>
          <CCardTitle>Настройки с Checks and radios </CCardTitle>
          <CFormCheck id="defaultCheck1" label="Обычный чекбокс" />
          <CFormCheck id="defaultCheck2" label="Выключенный чекбокс" disabled />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            label="Выключенный радио чекбокс (1)"
            disabled
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            label="Радио чекбокс (2)"
          />
          <CFormCheck
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            label="Радио чекбокс (3)"
            defaultChecked
          />
          <CButton color="primary" type="submit" className="mt-2">
            Сохранить
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="mx-4 mb-4">
        <CCardBody>
          <CCardTitle>Настройки с Select </CCardTitle>
          <CFormSelect
            aria-label="Пример Default select"
            options={[
              "Откройте меню селектора",
              { label: "Один", value: "1" },
              { label: "Два", value: "2" },
              { label: "Три", value: "3", disabled: true },
            ]}
          />
          <CButton color="primary" type="submit" className="mt-2">
            Сохранить
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="mx-4 mb-4">
        <CCardBody>
          <CCardTitle>Настройки с Range </CCardTitle>
          <CFormRange id="customRange1" label="Пример range" />
          <CButton color="primary" type="submit" className="mt-2">
            Сохранить
          </CButton>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default AccountSettings;
