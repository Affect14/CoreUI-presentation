import { CCard, CCardBody, CCardTitle, CCol, CContainer, CFormCheck, CFormRange, CFormSelect, CRow } from "@coreui/react"
import Range from "../forms/range/Range"
const { default: ChecksRadios } = require("../forms/checks-radios/ChecksRadios")
const { default: Select } = require("../forms/select/Select")

const GlobalSettingsComponent = () => {
    return(
        <>
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={8}>
                        <CCard className="mx-4 mb-4">
                            <CCardBody>
                                <CCardTitle>Настройки с Checks and radios </CCardTitle>
                                <CFormCheck id="defaultCheck1" label="Default checkbox"/>
                                <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>
                                <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio disabled" disabled/>
                                <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio" />
                                <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Checked radio" defaultChecked/>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol md={9} lg={7} xl={8} mb={7}>
                        <CCard className="mx-4 mb-4">
                            <CCardBody> 
                                <CCardTitle>Настройки с Select  </CCardTitle>
                                <CFormSelect 
                                    aria-label="Пример Default select"
                                    options={[
                                        'Откройте меню селектора',
                                        { label: 'Один', value: '1' },
                                        { label: 'Два', value: '2' },
                                        { label: 'Три', value: '3', disabled: true }
                                    ]}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol md={9} lg={7} xl={8}>
                        <CCard className="mx-4 mb-4">
                            <CCardBody>
                                <CCardTitle>Настройки с Range  </CCardTitle>
                                <CFormRange id="customRange1" label="Пример range" />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}
export default GlobalSettingsComponent