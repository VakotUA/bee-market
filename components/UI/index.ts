import { Container } from '../Layout/Container'
import { BurgerMenu } from './BurgerMenu'
import { Button } from './Button'
import { Card as CategoryCard } from './Cards/Category'
import { Card as ProductCard } from './Cards/Product'
import { DiscountMark } from './Discount'
import { NavLink } from './NavLink'
import { Primary } from './PrimaryText'
import { Select } from './Select'

export const UI = {
  Container,
  BurgerMenu,
  Button,
  NavLink,
  Primary,
  Select,
  DiscountMark,
  Card: {
    CategoryCard,
    ProductCard,
  },
}
