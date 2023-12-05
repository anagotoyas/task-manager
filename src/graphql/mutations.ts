import { gql } from '@apollo/client';

export const CREATE_TASK_MUTATION = gql`
mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      tags
      status
      dueDate
      position
      pointEstimate
      assignee {
        id
        avatar
        fullName
      }
    }
  }
  
`;

export const DELETE_TASK_MUTATION = gql`
mutation DeleteTask($input: DeleteTaskInput!) {
	deleteTask(input: $input) {
		id
	}
}
  
`;

export const UPDATE_TASK_MUTATION = gql`
mutation UpdateTask($input: UpdateTaskInput!) {
	updateTask(input: $input) {
		id
		name
		tags
		status
		dueDate
		position
		pointEstimate
		assignee {
			id
			avatar
			fullName
		}
	}
}

`
export const MOVE_TASK_MUTATION = gql`
mutation MoveTask($input: UpdateTaskInput!) {
	updateTask(input: $input) {
		id
		name
		tags
		status
		dueDate
		position
		pointEstimate
		assignee {
			id
			avatar
			fullName
		}
	}
}
`