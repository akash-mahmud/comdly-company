export const summaryPageTopMenu = {
	intro: { id: 'intro', text: 'Intro', path: '#intro', icon: 'Vrpano', subMenu: null },
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap Components',
		path: '#bootstrap',
		icon: 'BootstrapFill',
		subMenu: null,
	},
	storybook: {
		id: 'storybook',
		text: 'Storybook',
		path: '#storybook',
		icon: 'CustomStorybook',
		subMenu: null,
	},
	formik: {
		id: 'formik',
		text: 'Formik',
		path: '#formik',
		icon: 'CheckBox',
		subMenu: null,
	},
	apex: {
		id: 'apex',
		text: 'Apex Charts',
		path: '#apex',
		icon: 'AreaChart',
		subMenu: null,
	},
};

export const dashboardPagesMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: '/',
		icon: 'Dashboard',
		subMenu: null,
	},
	welcome: {
		id: 'dashboard',
		text: 'Welcome',
		path: '/',
		icon: 'Dashboard',
		subMenu: null,
	},
	dashboardProject: {
		id: 'dashboardProject',
		text: 'Calender',
		path: 'project-management/list',
		icon: 'AutoStories',
		notification: true,
		subMenu: null,
	},
	dashboardBooking: {
		id: 'dashboard-booking',
		text: 'Marketing suit',
		path: 'dashboard-booking',
		icon: 'emoji_transportation',
		subMenu: null,
	},
	crmDashboard: {
		id: 'crmDashboard',
		text: 'Manage',
		path: 'crm/dashboard',
		icon: 'RecentActors',
		subMenu: {
			boxedSingle: {
				id: 'boxedSingle',
				text: 'Services',
				path: 'single-pages/boxed',
				icon: 'ViewArray',
			},
			fluidSingle: {
				id: 'fluidSingle',
				text: 'Service Provioders',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
			clients: {
				id: 'clients',
				text: 'Clients',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
			users: {
				id: 'users',
				text: 'Users',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
			calenderandNoteTypes: {
				id: 'calenderandNoteTypes',
				text: 'Calender and note Types',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
		},
	},
	summary: {
		id: 'summary',
		text: 'Reports',
		path: 'summary',
		icon: 'sticky_note_2',
		subMenu: {
			boxedSingle: {
				id: 'boxedSingle',
				text: 'Boxed',
				path: 'single-pages/boxed',
				icon: 'ViewArray',
			},
			fluidSingle: {
				id: 'fluidSingle',
				text: 'Fluid',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
		},	},
};

export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},
	singlePages: {
		id: 'singlePages',
		text: 'Custom Fetaures',
		path: 'single-pages',
		icon: 'Article',
		subMenu: null
	},
	login:{},
	listPages: {
		id: 'listPages',
		text: 'Settings',
		path: 'list-pages',
		icon: 'Dvr',
		subMenu: {
			listBoxed: {
				id: 'listBoxed',
				text: 'Boxed List',
				path: 'list-pages/boxed-list',
				icon: 'ViewArray',
			},
			listFluid: {
				id: 'listFluid',
				text: 'Fluid List',
				path: 'list-pages/fluid-list',
				icon: 'ViewDay',
			},
		},
	},


};

export const pageLayoutTypesPagesMenu = {
	layoutTypes: {
		id: 'layoutTypes',
		text: 'Page Layout Types',
	},
	blank: {
		id: 'blank',
		text: 'Plans & prices',
		path: 'page-layouts/blank',
		icon: 'check_box_outline_blank ',
		subMenu: {
			headerAndSubheader: {
				id: 'headerAndSubheader',
				text: 'Header & Subheader',
				path: 'page-layouts/header-and-subheader',
				icon: 'ViewAgenda',
			},
			onlyHeader: {
				id: 'onlyHeader',
				text: 'Only Header',
				path: 'page-layouts/only-header',
				icon: 'ViewStream',
			},
		
		},
	},
	pageLayout: {
		id: 'pageLayout',
		text: 'Help',
		path: 'page-layouts',
		icon: 'BackupTable',
		subMenu: {
			headerAndSubheader: {
				id: 'headerAndSubheader',
				text: 'Header & Subheader',
				path: 'page-layouts/header-and-subheader',
				icon: 'ViewAgenda',
			},
			onlyHeader: {
				id: 'onlyHeader',
				text: 'Only Header',
				path: 'page-layouts/only-header',
				icon: 'ViewStream',
			},
		
		},
	},

};

export const componentPagesMenu = {
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap',
		icon: 'Extension',
	},
	content: {
		id: 'content',
		text: 'Content',
		path: 'content',
		icon: 'format_size',
		subMenu: {
			typography: {
				id: 'typography',
				text: 'Typography',
				path: 'content/typography',
				icon: 'text_fields',
			},
			images: {
				id: 'images',
				text: 'Images',
				path: 'content/images',
				icon: 'Image ',
			},
			tables: {
				id: 'tables',
				text: 'Tables',
				path: 'content/tables',
				icon: 'table_chart',
			},
			figures: {
				id: 'figures',
				text: 'Figures',
				path: 'content/figures',
				icon: 'Photo Library ',
			},
		},
	},
	forms: {
		id: 'forms',
		text: 'Forms',
		path: 'forms',
		icon: 'CheckBox',
		notification: 'success',
		subMenu: {
			formGroup: {
				id: 'formGroup',
				text: 'Form Group',
				path: 'forms/form-group',
				icon: 'Source',
			},
			formControl: {
				id: 'formControl',
				text: 'Form Controls',
				path: 'forms/form-controls',
				icon: 'Create',
			},
			select: {
				id: 'select',
				text: 'Select',
				path: 'forms/select',
				icon: 'Checklist',
			},
			checksAndRadio: {
				id: 'checksAndRadio',
				text: 'Checks & Radio',
				path: 'forms/checks-and-radio',
				icon: 'CheckBox',
			},
			range: {
				id: 'range',
				text: 'Range',
				path: 'forms/range',
				icon: 'HdrStrong',
			},
			inputGroup: {
				id: 'inputGroup',
				text: 'Input Group',
				path: 'forms/input-group',
				icon: 'PowerInput',
			},
			validation: {
				id: 'validation',
				text: 'Validation',
				path: 'forms/validation',
				icon: 'VerifiedUser',
			},
			wizard: {
				id: 'wizard',
				text: 'Wizard',
				path: 'forms/wizard',
				icon: 'LinearScale',
			},
		},
	},
	components: {
		id: 'components',
		text: 'Component',
		path: 'components',
		icon: 'Extension',
		notification: 'success',
		subMenu: {
			accordion: {
				id: 'accordion',
				text: 'Accordion',
				path: 'components/accordion',
				icon: 'ViewDay',
			},
			alert: {
				id: 'alert',
				text: 'Alert',
				path: 'components/alert',
				icon: 'Announcement',
			},
			badge: {
				id: 'badge',
				text: 'Badge',
				path: 'components/badge',
				icon: 'Vibration',
			},
			breadcrumb: {
				id: 'breadcrumb',
				text: 'Breadcrumb',
				path: 'components/breadcrumb',
				icon: 'AddRoad',
			},
			button: {
				id: 'button',
				text: 'Button',
				path: 'components/button',
				icon: 'SmartButton',
			},
			buttonGroup: {
				id: 'buttonGroup',
				text: 'Button Group',
				path: 'components/button-group',
				icon: 'Splitscreen',
			},
			card: {
				id: 'card',
				text: 'Card',
				path: 'components/card',
				icon: 'Crop32',
			},
			carousel: {
				id: 'carousel',
				text: 'Carousel',
				path: 'components/carousel',
				icon: 'RecentActors',
			},
			// Close
			collapse: {
				id: 'collapse',
				text: 'Collapse',
				path: 'components/collapse',
				icon: 'UnfoldLess',
			},
			dropdowns: {
				id: 'dropdowns',
				text: 'Dropdowns',
				path: 'components/dropdowns',
				icon: 'Inventory',
			},
			listGroup: {
				id: 'listGroup',
				text: 'List Group',
				path: 'components/list-group',
				icon: 'ListAlt',
			},
			modal: {
				id: 'modal',
				text: 'Modal',
				path: 'components/modal',
				icon: 'PictureInPicture',
			},
			navsTabs: {
				id: 'navsTabs',
				text: 'Navs & Tabs',
				path: 'components/navs-and-tabs',
				icon: 'PivotTableChart',
			},
			// Navbar
			offcanvas: {
				id: 'offcanvas',
				text: 'Offcanvas',
				path: 'components/offcanvas',
				icon: 'VerticalSplit',
			},
			pagination: {
				id: 'pagination',
				text: 'Pagination',
				path: 'components/pagination',
				icon: 'Money',
			},
			popovers: {
				id: 'popovers',
				text: 'Popovers',
				path: 'components/popovers',
				icon: 'Assistant',
			},
			progress: {
				id: 'progress',
				text: 'Progress',
				path: 'components/progress',
				icon: 'HourglassTop',
			},
			scrollspy: {
				id: 'scrollspy',
				text: 'Scrollspy',
				path: 'components/scrollspy',
				icon: 'KeyboardHide',
			},
			spinners: {
				id: 'spinners',
				text: 'Spinners',
				path: 'components/spinners',
				icon: 'RotateRight',
			},
			table: {
				id: 'table',
				text: 'Table',
				path: 'components/table',
				icon: 'TableChart',
			},
			toasts: {
				id: 'toasts',
				text: 'Toasts',
				path: 'components/toasts',
				icon: 'RotateRight',
			},
			tooltip: {
				id: 'tooltip',
				text: 'Tooltip',
				path: 'components/tooltip',
				icon: 'Assistant',
			},
		},
	},
	utilities: {
		id: 'utilities',
		text: 'Utilities',
		path: 'utilities',
		icon: 'Support',
		subMenu: {
			api: {
				id: 'api',
				text: 'API',
				path: 'utilities/api',
				icon: 'Api',
			},
			background: {
				id: 'background',
				text: 'Background',
				path: 'utilities/background',
				icon: 'FormatColorFill',
			},
			borders: {
				id: 'borders',
				text: 'Borders',
				path: 'utilities/borders',
				icon: 'BorderStyle',
			},
			colors: {
				id: 'colors',
				text: 'Colors',
				path: 'utilities/colors',
				icon: 'InvertColors',
			},
			display: {
				id: 'display',
				text: 'Display',
				path: 'utilities/display',
				icon: 'LaptopMac',
			},
			flex: {
				id: 'flex',
				text: 'Flex',
				path: 'utilities/flex',
				icon: 'SettingsOverscan',
			},
			float: {
				id: 'float',
				text: 'Float',
				path: 'utilities/float',
				icon: 'ViewArray',
			},
			interactions: {
				id: 'interactions',
				text: 'Interactions',
				path: 'utilities/interactions',
				icon: 'Mouse',
			},
			overflow: {
				id: 'overflow',
				text: 'Overflow',
				path: 'utilities/overflow',
				icon: 'TableRows',
			},
			position: {
				id: 'position',
				text: 'Position',
				path: 'utilities/position',
				icon: 'Adjust',
			},
			shadows: {
				id: 'shadows',
				text: 'Shadows',
				path: 'utilities/shadows',
				icon: 'ContentCopy',
			},
			sizing: {
				id: 'sizing',
				text: 'Sizing',
				path: 'utilities/sizing',
				icon: 'Straighten',
			},
			spacing: {
				id: 'spacing',
				text: 'Spacing',
				path: 'utilities/spacing',
				icon: 'SpaceBar',
			},
			textPage: {
				id: 'text',
				text: 'Text',
				path: 'utilities/text',
				icon: 'TextFields',
			},
			verticalAlign: {
				id: 'vertical-align',
				text: 'Vertical Align',
				path: 'utilities/vertical-align',
				icon: 'VerticalAlignCenter',
			},
			visibility: {
				id: 'visibility',
				text: 'Visibility',
				path: 'utilities/visibility',
				icon: 'Visibility',
			},
		},
	},
	extra: {
		id: 'extra',
		text: 'Extra Library',
		icon: 'Extension',
		path: undefined,
	},
	icons: {
		id: 'icons',
		text: 'Icons',
		path: 'icons',
		icon: 'Grain',
		notification: 'success',
		subMenu: {
			iconPage: {
				id: 'icon',
				text: 'Icon',
				path: 'icons/icon',
				icon: 'Lightbulb',
			},
			material: {
				id: 'material',
				text: 'Material',
				path: 'icons/material',
				icon: 'Verified',
			},
		},
	},
	charts: {
		id: 'charts',
		text: 'Charts',
		path: 'charts',
		icon: 'AreaChart',
		notification: 'success',
		subMenu: {
			chartsUsage: {
				id: 'chartsUsage',
				text: 'General Usage',
				path: 'charts/general-usage',
				icon: 'Description',
			},
			chartsSparkline: {
				id: 'chartsSparkline',
				text: 'Sparkline',
				path: 'charts/sparkline',
				icon: 'AddChart',
			},
			chartsLine: {
				id: 'chartsLine',
				text: 'Line',
				path: 'charts/line',
				icon: 'ShowChart',
			},
			chartsArea: {
				id: 'chartsArea',
				text: 'Area',
				path: 'charts/area',
				icon: 'AreaChart',
			},
			chartsColumn: {
				id: 'chartsColumn',
				text: 'Column',
				path: 'charts/column',
				icon: 'BarChart',
			},
			chartsBar: {
				id: 'chartsBar',
				text: 'Bar',
				path: 'charts/bar',
				icon: 'StackedBarChart',
			},
			chartsMixed: {
				id: 'chartsMixed',
				text: 'Mixed',
				path: 'charts/mixed',
				icon: 'MultilineChart',
			},
			chartsTimeline: {
				id: 'chartsTimeline',
				text: 'Timeline',
				path: 'charts/timeline',
				icon: 'WaterfallChart',
			},
			chartsCandleStick: {
				id: 'chartsCandleStick',
				text: 'Candlestick',
				path: 'charts/candlestick',
				icon: 'Cake',
			},
			chartsBoxWhisker: {
				id: 'chartsBoxWhisker',
				text: 'Box Whisker',
				path: 'charts/box-whisker',
				icon: 'SportsMma',
			},
			chartsPieDonut: {
				id: 'chartsPieDonut',
				text: 'Pie & Donut',
				path: 'charts/pie-donut',
				icon: 'PieChart',
			},
			chartsRadar: {
				id: 'chartsRadar',
				text: 'Radar',
				path: 'charts/radar',
				icon: 'BrightnessLow',
			},
			chartsPolar: {
				id: 'chartsPolar',
				text: 'Polar',
				path: 'charts/polar',
				icon: 'TrackChanges',
			},
			chartsRadialBar: {
				id: 'chartsRadialBar',
				text: 'Radial Bar',
				path: 'charts/radial-bar',
				icon: 'DonutLarge',
			},
			chartsBubble: {
				id: 'chartsBubble',
				text: 'Bubble',
				path: 'charts/bubble',
				icon: 'BubbleChart',
			},
			chartsScatter: {
				id: 'chartsScatter',
				text: 'Scatter',
				path: 'charts/scatter',
				icon: 'ScatterPlot',
			},
			chartsHeatMap: {
				id: 'chartsHeatMap',
				text: 'Heat Map',
				path: 'charts/heat-map',
				icon: 'GridOn',
			},
			chartsTreeMap: {
				id: 'chartsTreeMap',
				text: 'Tree Map',
				path: 'charts/tree-map',
				icon: 'AccountTree',
			},
		},
	},
	notification: {
		id: 'notification',
		text: 'Notification',
		path: 'notifications',
		icon: 'NotificationsNone',
	},
	hooks: {
		id: 'hooks',
		text: 'Hooks',
		path: 'hooks',
		icon: 'Anchor',
	},
};

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
