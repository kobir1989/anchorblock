import { createSlice } from '@reduxjs/toolkit'

// for small screens (on big scrrens sidebar always be open )
const initialState = {
  showSidebar: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: state => {
      state.showSidebar = true
    },
    closeSidebar: state => {
      state.showSidebar = false
    }
  }
})

export default sidebarSlice.reducer
export const { openSidebar, closeSidebar } = sidebarSlice.actions
