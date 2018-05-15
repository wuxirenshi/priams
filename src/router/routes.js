import Login from '../views/Login'
import Home from '../views/home/Home'
import Dashboard from '../views/dashboard/Dashboard'
import Task from '../views/mission/Task'
import Report from '../views/mission/Report'
import TaskTemplate from '../views/stencil/TaskTemplate'
import ReportTemplate from '../views/stencil/ReportTemplate'
import NotFound from '../views/404'
import Group from '../views/manager/Group'
import User from '../views/manager/user'

export const constantRoutes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-tasks',
        leaf: true,
        children: [
            {path: '/dashboard', component: Dashboard, name: '任务中心'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '任务管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/task', component: Task, name: '测试任务'},
            {path: '/report', component: Report, name: '测试报告'},
            {path: '/task/template', component: TaskTemplate, name: '任务模版', hidden: true},
            {path: '/report/template', component: ReportTemplate, name: '报告模版', hidden: true}
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

export const permissionRoutes = [
    {
        path: '/',
        component: Home,
        name: '自动化测试',
        iconCls: 'fa fa-connectdevelop',
        children: [
            {path: '/test', component: Task, name: '用例管理'},
            {path: '/case', component: Report, name: '数据统计'},
        ],
        meta: {
            roles: ['admin', 'ordinary']
        }
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'fa fa-user',
        children: [
            {path: '/user', component: User, name: '用户信息'},
            {path: '/group', component: Group, name: '小组信息'},
        ],
        meta: {
            roles: ['admin']
        }
    },
];
