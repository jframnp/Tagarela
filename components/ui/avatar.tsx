import * as React from 'react'
import { cn } from '@/app/lib/utils'  // Função para combinar classes, caso tenha no seu projeto

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
}

export function Avatar({ size = 'medium', className, children, ...props }: AvatarProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
  }

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden bg-gray-200 flex items-center justify-center',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <img
      className={cn('object-cover h-full w-full', className)}
      {...props}
    />
  )
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AvatarFallback({ className, children, ...props }: AvatarFallbackProps) {
  return (
    <div
      className={cn('flex items-center justify-center h-full w-full text-white bg-purple-500', className)}
      {...props}
    >
      {children}
    </div>
  )
}
