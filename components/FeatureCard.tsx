import { FC } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  description,
  title,
  imgSrc,
  children,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <img className="w-full h-96" src={imgSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">{children}</div>
    </div>
  );
};
