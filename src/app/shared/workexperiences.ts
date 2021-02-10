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
                role: [{ title: 'Front-end' }],
                teamsize: 5,
                task: [
                    { name: 'Standing daily meeting' },
                    { name: 'Catchup meeting' },
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
                    { name: ' RxJS' },
                    { name: 'Angular NG-CLI' },
                    { name: 'HTML' },
                    { name: 'SCSS' },
                    { name: 'Flex Layout' },
                    { name: 'Angular Material' },
                ]
            }
        ]
    }
];
