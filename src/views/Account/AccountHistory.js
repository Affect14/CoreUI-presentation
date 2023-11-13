import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CContainer,
} from "@coreui/react";
import React from "react";

const AccountHistoryComponent = () => {
  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: "60rem" }}>
        <CCardBody>
          <CCardTitle>История операций</CCardTitle>
          <CContainer className="d-flex gap-4">
            <CCard style={{ width: "18rem" }}>
              <CCardImage
                height={140}
                orientation="top"
                src={"https://imgur.com/xWdYhgw.jpg"}
              />
              <CCardBody>
                <CCardTitle>Операция №1</CCardTitle>
                <CCardSubtitle className="mt-2 mb-2">02.03.2023</CCardSubtitle>
                <CCardText>Здесь выполняется операция номер один.</CCardText>
                <CButton href="#">Подробнее</CButton>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage
                height={140}
                orientation="top"
                src={"https://imgur.com/xWdYhgw.jpg"}
              />
              <CCardBody>
                <CCardTitle>Операция №2</CCardTitle>
                <CCardSubtitle className="mt-2 mb-2">06.03.2023</CCardSubtitle>
                <CCardText>Здесь выполнилась операция номер два.</CCardText>
                <CButton href="#">Подробнее</CButton>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage
                height={140}
                orientation="top"
                src={"https://imgur.com/xWdYhgw.jpg"}
              />
              <CCardBody>
                <CCardTitle>Операция №3</CCardTitle>
                <CCardSubtitle className="mt-2 mb-2">13.03.2023</CCardSubtitle>
                <CCardText>
                  Здесь произошла ошибка в операции номер три.
                </CCardText>
                <CButton href="#">Подробнее</CButton>
              </CCardBody>
            </CCard>
          </CContainer>
        </CCardBody>
      </CCard>
    </CContainer>
  );
};

export default AccountHistoryComponent;
