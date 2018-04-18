module Transform where

import Prelude
import Point as P
import Line as L
import Utils
import Data.List
import Square(Square(..))

-- Make a typeclass for this...
-- Maybe we need lenses already
-- Destructuring this and restructuring the shape
-- is gonna be a pain

scaleSquare :: Number -> Square -> Square
scaleSquare n (Square {a, b, c, d})  = 
  Square 
  { a: a * P.create n n n
  , b: b * P.create n n n
  , c: c * P.create n n n
  , d: d * P.create n n n
  }  

-- Replace with https://qiita.com/kimagure/items/06d7eed9521b6217b771
translateSquare :: Square -> P.Point -> Square
translateSquare (Square {a, b, c, d}) g = 
  Square 
  { a: a + g
  , b: b + g
  , c: c + g
  , d: d + g
  }

-- zigLine :: L.Line -> L.Line
-- zigLine l = 
--   let points = L.getPoints l
--   in points

zigPoints :: forall a. Semiring a => a -> a -> List a -> List a
zigPoints p p2 lp = 
  let evenP = (+) p <$> evens lp
      oddsP = (+) p2 <$> odds lp
    in evenP <> oddsP