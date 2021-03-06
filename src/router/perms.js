import i18n from '@/i18n/i18n'

const assetPermissionRoutes = [
  {
    path: 'asset-permissions',
    name: 'AssetPermissionList',
    component: () => import('@/views/perms/AssetPermission/AssetPermissionList'),
    meta: { title: i18n.t('route.AssetPermission') }
  },
  {
    path: 'asset-permissions/create',
    component: () => import('@/views/perms/AssetPermission/AssetPermissionCreateUpdate'),
    name: 'AssetPermissionCreate',
    hidden: true,
    meta: { title: i18n.t('route.AssetPermissionCreate'), activeMenu: '/perms/asset-permissions', action: 'create' }
  },
  {
    path: 'asset-permission/:id/update',
    component: () => import('@/views/perms/AssetPermission/AssetPermissionCreateUpdate.vue'),
    name: 'AssetPermissionUpdate',
    hidden: true,
    meta: { title: i18n.t('route.AssetPermissionUpdate'), activeMenu: '/perms/asset-permissions', action: 'update' }
  },
  {
    path: 'asset-permissions/:id',
    component: () => import('@/views/perms/AssetPermission/AssetPermissionDetail/index'),
    name: 'AssetPermissionDetail',
    hidden: true,
    meta: { title: i18n.t('route.AssetPermissionDetail'), activeMenu: '/perms/asset-permissions' }
  }
]

const remoteAppPermissionRoutes = [
  {
    path: 'remote-app-permissions',
    name: 'RemoteAppPermissionList',
    component: () => import('@/views/perms/RemoteAppPermission/RemoteAppPermissionList'),
    meta: { title: i18n.t('route.RemoteAppPermission') }
  },
  {
    path: 'remote-app-permissions/create',
    component: () => import('@/views/perms/RemoteAppPermission/RemoteAppPermissionCreateUpdate'),
    name: 'RemoteAppPermissionCreate',
    hidden: true,
    meta: { title: i18n.t('route.RemoteAppPermissionCreate'), activeMenu: '/perms/remote-app-permissions', action: 'create' }
  },
  {
    path: 'remote-app-permissions/update',
    component: () => import('@/views/perms/RemoteAppPermission/RemoteAppPermissionCreateUpdate'),
    name: 'RemoteAppPermissionUpdate',
    hidden: true,
    meta: { title: i18n.t('route.RemoteAppPermissionUpdate'), activeMenu: '/perms/remote-app-permissions', action: 'update' }
  },
  {
    path: 'remote-app-permissions/:id',
    component: () => import('@/views/perms/RemoteAppPermission/RemoteAppPermissionDetail/index'),
    name: 'RemoteAppPermissionDetail',
    hidden: true,
    meta: { title: i18n.t('route.RemoteAppPermissionDetail'), activeMenu: '/perms/remote-app-permissions' }
  }
]

const databasePermissionRoutes = [
  {
    path: 'database-app-permissions',
    name: 'DatabaseAppPermissionList',
    component: () => import('@/views/perms/DatabaseAppPermission/DatabaseAppPermissionList'),
    meta: { title: i18n.t('route.DatabaseAppPermission') }
  },
  {
    path: 'database-app-permissions/create',
    component: () => import('@/views/perms/DatabaseAppPermission/DatabaseAppPermissionCreateUpdate'), // Parent router-view
    name: 'DatabaseAppPermissionCreate',
    hidden: true,
    meta: { title: i18n.t('route.DatabaseAppPermissionCreate'), activeMenu: '/perms/database-app-permissions' }
  },
  {
    path: 'database-app-permissions/update',
    component: () => import('@/views/perms/DatabaseAppPermission/DatabaseAppPermissionCreateUpdate'), // Parent router-view
    name: 'DatabaseAppPermissionUpdate',
    hidden: true,
    meta: { title: i18n.t('route.DatabaseAppPermissionUpdate'), activeMenu: '/perms/database-app-permissions', action: 'update' }
  },
  {
    path: 'database-app-permissions/:id',
    component: () => import('@/views/perms/DatabaseAppPermission/DatabaseAppPermissionDetail/index'),
    name: 'DatabaseAppPermissionDetail',
    hidden: true,
    meta: { title: i18n.t('route.DatabaseAppPermissionDetail'), activeMenu: '/perms/database-app-permissions' }
  }
]

export default [
  ... assetPermissionRoutes,
  ... remoteAppPermissionRoutes,
  ... databasePermissionRoutes
]
