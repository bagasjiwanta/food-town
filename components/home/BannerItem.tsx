import { TouchableOpacity, Text, Image } from 'react-native';

export interface Props {
  imageUrl: string;
  id: string;
}

const BannerItem = ({ imageUrl, id }: Props) => {
  return (
    <TouchableOpacity key={id} className='mr-6 items-center space-y-2'>
      <Image source={{ uri: imageUrl }} className="w-[240px] h-[60px] rounded-md" />
    </TouchableOpacity>
  );
};

export default BannerItem;
