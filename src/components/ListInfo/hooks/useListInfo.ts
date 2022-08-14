import { useAppSelector, selectTTHInfo } from "../../../redux";

export const useListInfo = () => {
  const ttnInfo = useAppSelector(selectTTHInfo);

  return ttnInfo;
};
