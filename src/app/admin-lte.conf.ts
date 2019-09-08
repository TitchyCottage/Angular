export const adminLteConf = {
  skin: 'black',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    // {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Get Started', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Product', iconClasses: 'fa fa-th-list', children: [
      {label: 'Dashboard', route: 'Admin/Dashboard'},
      {label: 'View Product Qty', route: 'Admin/viewProduct'},
      {label: 'Add Qty', route: 'Admin/add-quantity/0'},
      {label: 'Add Product', route: 'Admin/addProduct'},
      {label: 'View Distibutor', route: 'Admin/view-distibutor'},
      {label: 'Add Distibutor', route: 'Admin/add-distibutor/0'},
      // {label: 'Header', route: 'layout/header'},
      // {label: 'Sidebar Left', route: 'layout/sidebar-left'},
      // {label: 'Sidebar Right', route: 'layout/sidebar-right'},
      // {label: 'Content', route: 'layout/content'}
    ]},
    {label: 'Distibutor', iconClasses: 'fa fa-th-list', children: [
      {label: 'Dashboard', route: 'Distibutor/dashboard'},
      {label: 'Check-in', route: 'Distibutor/check-in'},
      {label: 'Check-out', route: 'Distibutor/check-out'},
      {label: 'View Retailer', route: 'Distibutor/view-retailer'},
      {label: 'Add Retailer', route: 'Distibutor/add-retailer/0'},
      // {label: 'View Product', route: 'Admin/viewProduct'},
      // {label: 'Add Product', route: 'Admin/addProduct'},
      // {label: 'View Distibutor', route: 'Admin/view-distibutor'},
      // {label: 'Add Distibutor', route: 'Admin/add-distibutor/0'},
      // {label: 'Header', route: 'layout/header'},
      // {label: 'Sidebar Left', route: 'layout/sidebar-left'},
      // {label: 'Sidebar Right', route: 'layout/sidebar-right'},
      // {label: 'Content', route: 'layout/content'}
    ]},
    {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        {label: 'Configuration', route: 'layout/configuration'},
        {label: 'Custom', route: 'layout/custom'},
        {label: 'Header', route: 'layout/header'},
        {label: 'Sidebar Left', route: 'layout/sidebar-left'},
        {label: 'Sidebar Right', route: 'layout/sidebar-right'},
        {label: 'Content', route: 'layout/content'}
      ]},
    {label: 'COMPONENTS', separator: true},
    {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
        {label: 'Default Box', route: 'boxs/box'},
        {label: 'Info Box', route: 'boxs/info-box'},
        {label: 'Small Box', route: 'boxs/small-box'}
      ]},
    {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    {label: 'Form', iconClasses: 'fa fa-files-o', children: [
        {label: 'Input Text', route: 'form/input-text'}
    ]},
    {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};
