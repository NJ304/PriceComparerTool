import React from 'react'
import contactList from '../components/ListView'
import {
  AppContent,
  ListView,
  AppDeviceSidebar,
  AppSidebar,
  AppFooter,
  AppHeader,
} from '../components/index'
import {
  CListGroup,
  CFormCheck,
  CAvatar,
  CButton,
  CDropdown,
  CBadge,
  CDropdownToggle,
  CDropdownMenu,
  CNavGroup,
  CNavTitle,
  CSidebarNav,
  CSidebarBrand,
  CDropdownItem,
  CSidebarToggler,
  CNavItem,
  CSidebar,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardImage,
  CCardText,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <div className="container-fluid">
            <div className="row new">
              <div className="col-md-9 col-lg-9  col-xl-9">
                <AppContent />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <ListView />
              </div>
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
