import Home from '../views/home/Home'
import Me from '../views/about/Me'
import Share from '../views/share/Share'
import Record from '../views/study/Record'
import Editor from '../views/editor/Editor'
import Dashboard from '../views/dashboard/Dashboard'
import Resume from '../views/resume/Resume'
import NotFound from '../views/404'

export const constantRoutes = [
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,
    children: [
      {path: '/', component: Dashboard, name: '首页'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,
    children: [
      {path: '/about', component: Me, name: '关于我'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,
    children: [
      {path: '/share', component: Share, name: '技术分享'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,
    children: [
      {path: '/record', component: Record, name: '学习积累'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,
    role: 'admin',
    children: [
      {path: '/editor', component: Editor, name: '发表文章'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    leaf: true,
    children: [
      {path: '/resume', component: Resume, name: '简历'},
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: {path: '/404'}
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
];
