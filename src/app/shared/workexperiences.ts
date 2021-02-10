import { Address } from './address';
import { WorkExperience } from './workexperience';


export const WORKEXPERIENCES: WorkExperience[] = [
    {
        id: '1',
        name: 'Kinh nghiệm làm việc của sok kim thanh',
        workexperience: [
            {
                id: '1',
                name: 'kinh nghiệm đi on-site sml ở manulife',
                fromdate: 'DECEMBER, 2020',
                todate: 'FEBRUARY, 2021',
                address: [
                    { name: 'INNOTECH, 33 Ba Vi, Ward 4, Tan Binh, Ho Chi Minh City' },
                    {
                        name: 'Manulife Plaza Building, 75 Hoang Van Thai, Tan Phu Ward, Dist. HCM City (on-site)'
                    }
                ],
                role: [{ name: 'Front-End' }],
                teamsize: 5,
                task: [
                    { name: 'Standing daily meeting and Catchup meeting' },
                ],
                achievement: [
                    {
                        name: 'Experience basic with SCSS Styling website'
                    },
                    {
                        name: 'Experience basic using Flex Layout'
                    },
                    {
                        name: 'Experience basic using Angular Material'
                    },
                    { name: 'Ng-x-owl-carousel' },
                    { name: 'picture upload styling custom component' },
                ],
                project: [
                    { name: `Manulife's insurance website` }
                ],
                tool: [
                    { name: 'VS Code, Source Tree, JIRA  , Figma.com' },
                ],
                technology: [
                    { name: 'TypeScript' },
                    { name: 'RxJS' },
                    { name: 'Angular NG-CLI' },
                    { name: 'HTML' },
                    { name: 'SCSS' },
                    { name: 'Flex Layout' },
                    { name: 'Angular Material' },
                ]
            },
            {
                id: '2',
                name: 'kinh nghiệm học hành ở pluralSight.com',
                fromdate: 'OCTOBER, 2020',
                todate: 'DECEMBER, 2020',
                address: [
                    { name: 'PluralSight.com' },
                ],
                role: [{ name: 'Front-End' }],
                teamsize: 1,
                task: [
                    { name: 'Watching video and learning by doing' },
                ],
                achievement: [
                    {
                        name: 'Experience self-learning basic with Angular programing'
                    },
                ],
                project: [
                    { name: `Angular Basic, Angular Routing, Angular HTTP client module` }
                ],
                technology: [
                    { name: 'TypeScript, Angular, Ng CLI, HTML, CSS, JS ' },
                ],
                tool: [
                    { name: 'VS Code, Git Hub' },
                ],
            },
            {
                id: '3',
                name: 'kinh nghiệm sml ở NETSPACE',
                fromdate: 'JULY, 2020',
                todate: 'AUGUST, 2020',
                address: [
                    { name: 'NETSPACE, DISTRICT 3, MARKETING DEPARTMENT, FULL-TIME' },
                ],
                role: [{ name: 'Front-End' }],
                teamsize: 4,
                task: [
                    { name: 'daily meetings, maintaining code, daily report' },
                ],
                achievement: [
                    {
                        name: 'Experience programing with pure HTML projects.'
                    },
                    {
                        name: 'Experience programing with Data visualization.'
                    },
                    {
                        name: 'Experience edit image with Photoshop and AI.'
                    }
                ],
                project: [
                    { name: `huongnghiep.com.vn, netspace.com.vn, Saigon Chef` }
                ],
                technology: [
                    { name: 'Owl-carousel, HTML5, CSS3, JavaScript, jQuery, Bootstrap 4 Framework, CSS3 animation, Chart.js' },
                ],
                tool: [
                    { name: 'Photoshop, AI, VS code, FileZilla' },
                ],
            },
            {
                id: '4',
                name: 'kinh nghiệm sml ở WAHSIS',
                fromdate: 'NOVEMBER, 2018',
                todate: 'JULY, 2020',
                address: [
                    { name: 'WAHSIS CO, LTD DISTRICT 7, SOFTWARE DEPARTMENT, FULL-TIME' },
                ],
                role: [{ name: 'Front-End' }],
                teamsize: 5,
                task: [
                    { name: 'Creating new, maintaining feature, meeting weekend' },
                ],
                achievement: [
                    {
                        name: 'Experience programing AngularJS, HTML/CSS/JS, Photoshop, AI'
                    },
                ],
                project: [
                    { name: `PMS and SMS Apartment management and contract management of high-rise apartments, townhouses system` }
                ],
                technology: [
                    { name: 'AngularJS, Bootstrap 3, JavaScript, HTML, CSS, JS, jQuery,' },
                ],
                tool: [
                    { name: 'VS Code, Photoshop, AI, Tortoise git, JIRA' },
                ],
            },
            {
                id: '5',
                name: 'kinh nghiệm sml ở ISC Quang Trung',
                fromdate: '2016',
                todate: '2017',
                address: [
                    { name: 'INTERN STUDENT, ISC QUANG TRUNG, DISTRICT 12 HCMC, LAB 1, FULL-TIME' },
                ],
                role: [{ name: 'Front-End' }],
                teamsize: 3,
                task: [
                    { name: 'Assisting member SQL design table, maintaining in project, daily meeting' },
                ],
                achievement: [
                    {
                        name: 'Experience programing with AngularJS, NodeJS'
                    },
                ],
                project: [
                    { name: `ISC Student management` }
                ],
                technology: [
                    { name: 'AngularJS, Bootstrap 3, JavaScript, HTML, CSS, JS, jQuery, Photoshop' },
                ],
                tool: [
                    { name: 'My SQL, Corel Draw, red mine, MS Project' },
                ],
            }
        ]
    }
];
