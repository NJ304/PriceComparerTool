import React, { lazy } from 'react'

import {
  CButton,
  CDropdown,
  CBadge,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
  CCarousel,
  CCarouselItem,
  CCardTitle,
  CCardText,
  CWidgetStatsF,
  CFooter,
  CFormSelect,
  CFormLabel,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'

import csv from 'src/files/temp.csv'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // const chartData = 'C:UsersSudheerDesktopLikewizeDocumementsLucidDatapriceData.csv'
  // var years = ['2020', '2022']
  const years = []
  const data = []
  setup()
  async function setup() {
    const res = await getData()
    years.push(res.years1)
    // data.push(res.temps)
    console.log(years)
    // console.log(data)
  }

  async function getData() {
    // const response = await fetch('testdata.csv');
    const response = await fetch(csv)
    const data = await response.text()
    const temps = []
    const years1 = []
    const rows = data.split('\n').slice(1)
    // console.log(rows)
    rows.forEach((row) => {
      const cols = row.split(',')
      // console.log(cols[4])
      // years.push(cols[4])
      // temps.push(cols[10])
      years1.push(cols[0])
      temps.push(cols[1])
    })
    return { years1, temps }
  }
  return (
    <>
      {/* <WidgetsDropdown /> */}
      {/* <WidgetsBrand withCharts /> */}
      <h4 className="gray_color">Hot Devices</h4>
      <p className="gray_color">This week biggest winners and losers</p>
      <CRow className="mb-2">
        <CCarousel
          controls="true"
          transition="crossfade"
          interval="false"
          dark
          className="hot_devices"
        >
          <CCarouselItem>
            <CRow className="align-middle">
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  title="Widget title"
                  value="89.9%"
                  footer={
                    <div>
                      <span></span>
                    </div>
                  }
                />
              </CCol>
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="warning"
                  title="Widget title"
                  value="89.9%"
                  footer={
                    <div>
                      <span></span>
                    </div>
                  }
                />
              </CCol>
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  title="Widget title"
                  value="89.9%"
                  footer={
                    <div>
                      <span></span>
                    </div>
                  }
                />
              </CCol>
            </CRow>
          </CCarouselItem>
          <CCarouselItem>
            <CRow>
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="warning"
                  title="Widget title"
                  value="89.9%"
                  footer={
                    <div>
                      <span></span>
                    </div>
                  }
                />
              </CCol>
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  title="Widget title"
                  value="89.9%"
                  footer={
                    <div>
                      <span></span>
                    </div>
                  }
                />
              </CCol>
              <CCol xs={4}>
                <CWidgetStatsF
                  className="mb-3"
                  color="warning"
                  title="Widget title"
                  value="89.9%"
                  footer={
                    <div>
                      <span></span>
                    </div>
                  }
                />
              </CCol>
            </CRow>
          </CCarouselItem>
        </CCarousel>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow className="mb-2">
            <CCol className="col-md-6 col-lg-6  col-xl-6">
              <h4 id="traffic" className="card-title mb-0">
                Price drop of by product($)
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol className="col-md-3 col-lg-3  col-xl-3">
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1" className="chart_filter_options">
                  Grade
                </CFormLabel>
                <CFormSelect aria-label="Default select example" className="" size="sm">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3" disabled>
                    Three
                  </option>
                </CFormSelect>
              </div>
            </CCol>
            <CCol className="col-md-3 col-lg-3  col-xl-3">
              <CFormLabel htmlFor="exampleFormControlInput1" className="chart_filter_options">
                Date Range
              </CFormLabel>
              <CFormSelect aria-label="Default select example" className="" size="sm">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3" disabled>
                  Three
                </option>
              </CFormSelect>
            </CCol>
            {/* <CCol sm={4} className="d-none d-md-block"> */}
            {/* <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton> */}
            {/* <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup> */}
            {/* </CCol> */}
          </CRow>

          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['2019', '2020', '2021', '2022'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                  pointBorderColor: '#fff',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <br />
        <CCardBody>
          {/* <CSidebar>
            <CSidebarBrand>Sidebar Brand</CSidebarBrand>
            <CSidebarNav>
              <CNavTitle>Nav Title</CNavTitle>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                Nav item
              </CNavItem>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                With badge
                <CBadge color="primary ms-auto">NEW</CBadge>
              </CNavItem>
            </CSidebarNav>
          </CSidebar> */}
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>
      {/* <WidgetsBrand withCharts /> */}
      {/* <CSidebar>
        <CSidebarBrand>Sidebar Brand</CSidebarBrand>
        <CSidebarNav>
          <CNavTitle>Nav Title</CNavTitle>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Nav item
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            With badge
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavItem>
        </CSidebarNav>
      </CSidebar> */}
    </>
  )
}

export default Dashboard
