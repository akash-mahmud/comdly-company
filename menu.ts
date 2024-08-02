export const summaryPageTopMenu = {}

export const dashboardPagesMenu = {}

export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	singlePages: {
		id: 'company',
		text: 'Company',
		path: 'company',
		icon: 'Article',
		subMenu: {
			create: {
				id: 'create',
				text: 'Create',
				path: 'company/create',
				icon: 'ViewArray',
			},
		
		},
	},
	Product: {
		id: 'Product',
		text: 'Product',
		path: 'product',
		icon: 'Dvr',
		subMenu: {
			create: {
				id: 'create',
				text: 'Create',
				path: 'product/create',
				icon: 'ViewArray',
			},
			allProducts: {
				id: 'allProducts',
				text: 'All products',
				path: 'product/list',
				icon: 'ViewDay',
			},
		},
	},
	bookings: {
		id: 'Bookings',
		text: 'Bookings',
		path: 'bookings',
		icon: 'Dvr',
	
	},
	login: {
		id: 'login',
		text: 'Login',
		path: 'auth/login',
		icon: 'Login',
	},
	register: {
		id: 'register',
		text: 'Sign Up',
		path: 'auth/register',
		icon: 'PersonAdd',
	},

};

export const pageLayoutTypesPagesMenu = {}

export const componentPagesMenu = {}

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
