import { gql } from '@apollo/client';


export const GET_TASKS = gql`
query GetAllTasks {
  tasks(input: {}) {
		id
		name
    assignee {
			id
			avatar
			fullName
		}
		tags
		status
		dueDate
		position
		pointEstimate
		
	}
  }`;

