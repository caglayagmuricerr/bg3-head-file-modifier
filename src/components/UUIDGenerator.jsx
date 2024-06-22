import { v4 as uuidv4 } from "uuid";

const UUIDGenerator = () => {
  const newUuid = uuidv4();
  return newUuid;
};

export default UUIDGenerator;
