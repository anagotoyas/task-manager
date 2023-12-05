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

  export const GET_TASK_BY_ID = gql`
  query GetTaskById($taskId: ID!) {
    task(id: $taskId) {
      id
      creator {
        id
        avatar
        fullName
      }
      createdAt
      dueDate
      name
      pointEstimate
      position
      status
      tags
    }
  }
  `
