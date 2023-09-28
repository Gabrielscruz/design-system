'use client';

import classNames from "classnames";
import { XMarkIcon, CheckIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

import { Box } from "../Box/Box";
import { Typography } from "../Typography/Typography";

export interface NoticeProps  extends React.HTMLAttributes<HTMLDivElement>{
    type: 'choose' | 'alert' | 'success' | 'error' 
    children?: React.ReactNode
    message: string
    direction?: 'col' | 'row'
    onClose: () => void; 
    border?: boolean
}

const getIcon = (type: NoticeProps['type']) => {
    switch (type) {
      case 'success': 
        return <CheckIcon className="w-4 h-4" />;
      case 'alert':
        return <InformationCircleIcon className="w-4 h-4" />;
      case 'error':
        return <ExclamationTriangleIcon className="w-4 h-4" />;
      default: 
        return <></>;
    }
  };

  const noticeClassMap = {
    success: "text-green-900",
    error: "text-red-900",
    alert: "text-yellow-900",
    choose: 'text-gray-primary'
  }
  
export function Notice(
    {
    children,
    type,
    message,
    border = false,
    className,
    onClose,
    direction = 'row',
    ...rest
    }: NoticeProps) {


    return (
    <Box 
        className={` flex p-4 justify-between items-center ${className}`}
        filledBackground 
        rounded
        border={border}
        type={type}
        {...rest}
      
    >
        <div className={ `flex flex-${direction} gap-1`}>
        <div className='flex gap-2'>
                {getIcon(type)}
                <Typography   size='md' className={classNames({[noticeClassMap[type]]:type}, className)}>
                    {message}
                </Typography>
        </div>
        {children}
        </div>
   
        <button onClick={onClose} className="w-4 h-4 cursor-pointer">
            <XMarkIcon   />
        </button >
    </Box>
    )
}