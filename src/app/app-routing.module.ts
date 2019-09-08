import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '',
  data: {
      title: 'Get Started'
  },
  children: [
    {
      path: '',
      component: HomeComponent
    }, {
      path: 'accordion',
      loadChildren: './+accordion/accordion.module#AccordionModule',
      data: {
        title: 'Accordion'
      }
    }, {
      path: 'alert',
      loadChildren: './+alert/alert.module#AlertModule',
      data: {
        title: 'Alert',
      }
    },
    {
      path: 'Admin',
      data: {
        title: 'Admin',
      },
      children: [
        {
          path: 'Dashboard',
          loadChildren: './Product/dashboard/dashboard.module#DashboardModule',
          data: {
            title: 'Dashboard'
          }
         },
         {
          path: 'viewProduct',
          loadChildren: './Product/viewProduct/viewProduct.module#ViewProductModule',
          data: {
            title: 'View Product'
          }
         },
         {     
        path: 'add-quantity/:id',
         loadChildren: './Product/add-quantity/add-quantity.module#AddQuantityModule',
         data: {
           title: 'Add Quantity'
         }
      },
         {
          path: 'addProduct',
          loadChildren: './Product/addProduct/addProduct.module#AddProductModule',
          data: {
            title: 'Add Product'
          }
        },
          {
            path: 'add-distibutor/:id',
            loadChildren: './Product/add-distibutor/add-distibutor.module#AddDistibutorModule',
            data: {
              title: 'Add Distibutor'
            }
         },
         {
          path: 'view-distibutor',
          loadChildren: './Product/view-distibutor/view-distibutor.module#ViewDistibutorModule',
          data: {
            title: 'View Distibutor'
          }
       }
        //, {
        //   path: 'custom',
        //   loadChildren: './+layout/custom/custom.module#CustomModule',
        //   data: {
        //     title: 'Disable Layout'
        //     // disableLayout: true
        //   }
        // }
      ]
    },
    {
      path: 'Distibutor',
      data: {
        title: 'Distibutor',
      },
      children: [
        {
          path: 'dashboard',
          loadChildren: './Distibutor/dashboard/dashboard.module#DashboardModule',
          data: {
            title: 'Dashboard'
          }
         },
         {
          path: 'check-in',
          loadChildren: './Distibutor/check-in/check-in.module#CheckInModule',
          data: {
            title: 'Check-In'
          }
         },
         {
          path: 'check-out',
          loadChildren: './Distibutor/check-out/check-out.module#CheckOutModule',
          data: {
            title: 'Check-out'
          }
         },
         {
          path: 'view-retailer',
          loadChildren: './Distibutor/view-retailer/view-retailer.module#ViewRetailerModule',
          data: {
            title: 'View Retailer'
          }
         },
         {
          path: 'add-retailer/:id',
          loadChildren: './Distibutor/add-retailer/add-retailer.module#AddRetailerModule',
          data: {
            title: 'Add Retailer'
          }
       },
        ]
      },
     {
      path: 'layout',
      data: {
        title: 'Layout',
      },
      children: [
        {
          path: 'configuration',
          loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
          data: {
            title: 'Configuration'
          }
        }, {
          path: 'custom',
          loadChildren: './+layout/custom/custom.module#CustomModule',
          data: {
            title: 'Disable Layout'
            // disableLayout: true
          }
        }, {
          path: 'content',
          loadChildren: './+layout/content/content.module#ContentModule',
          data: {
            title: 'Content'
          }
        }, {
          path: 'header',
          loadChildren: './+layout/header/header.module#HeaderModule',
          data: {
            title: 'Header'
          }
        }, {
          path: 'sidebar-left',
          loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
          data: {
            title: 'Sidebar Left'
          }
        }, {
          path: 'sidebar-right',
          loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
          data: {
            title: 'Sidebar Right'
          }
        },
      ]
    }, {
      path: 'boxs',
      data: {
        title: 'Boxs',
      },
      children: [
        {
          path: 'box',
          loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule',
          data: {
            title: 'Box'
          }
        }, {
          path: 'info-box',
          loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule',
          data: {
            title: 'Info Box'
          }
        }, {
          path: 'small-box',
          loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule',
          data: {
            title: 'Small Box'
          }
        }
      ]}, {
        path: 'dropdown',
        loadChildren: './+dropdown/dropdown.module#DropdownModule',
        data: {
          title: 'Dropdown',
        }
      }, {
        path: 'tabs',
        loadChildren: './+tabs/tabs.module#TabsModule',
        data: {
          title: 'Tabs',
        }
      }
    ]
  }, {
    path: 'form',
    data: {
      title: 'Form',
    },
    children: [
      {
        path: 'input-text',
        loadChildren: './+form/input-text/input-text.module#InputTextModule',
        data: {
          title: 'Input Text',
        }
      }
    ]
  }, {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
