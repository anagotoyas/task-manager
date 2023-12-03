
interface OptionMenuProps {
  task: TaskItem;
  closeOptionModal: () => void;
  openOptionModal: () => void;
}

interface TaskItem {
  id: string;
  name: string;
  pointEstimate: string;
  tags: string[];
  avatar: User["avatar"] | null;
  dueDate: string;
}

interface User {
  name: string;
  avatar: string;
}



export const OptionMenu = (props: OptionMenuProps) => {
  const { task, closeOptionModal, openOptionModal } = props;

  return (
    <div>index</div>
  )
}
