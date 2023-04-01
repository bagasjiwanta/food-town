import { TouchableOpacity, Text, Image } from 'react-native';

export interface Props {
  imageUrl: string;
  name: string;
  id: string;
}

const CategoryItem = ({ imageUrl, name, id }: Props) => {
  return (
    <TouchableOpacity key={id} className='mr-6 items-center space-y-2'>
      <Image source={{ uri: imageUrl }} className="w-[72px] h-[72px] rounded-md" />
      <Text className='text-xs'>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
