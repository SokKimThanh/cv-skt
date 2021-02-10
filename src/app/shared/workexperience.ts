import { Achievement } from './achievement';
import { Address } from './address';
import { Project } from './project';
import { Role } from './role';
import { Task } from './task';
import { Technology } from './technology';
import { Tool } from './tool';


export class WorkExperience {
    id!: string;
    name?: string | undefined;
    fromdate?: string | undefined;
    todate?: string | undefined;
    address?: Address[] | undefined;
    role?: Role[] | undefined;
    teamsize?: number | undefined;
    task?: Task[] | undefined;
    achievement?: Achievement[] | undefined;
    project?: Project[] | undefined;
    technology?: Technology[] | undefined;
    tool?: Tool[] | undefined;
    workexperience?: WorkExperience[] | undefined;
}
