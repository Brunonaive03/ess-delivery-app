import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { useState } from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Promotion } from '../api/promotion'
import { PromotionDrawer } from './promotionDrawer'


interface PromotionProps {
  promotion: Promotion
  refetch: () => void
  restaurantId: string
}

export const PromotionItem = ({promotion, refetch, restaurantId}: PromotionProps) => {
    const navigate = useNavigate()
    const [openEditPromotionDialog, setOpenEditPromotionDialog] = useState(false)
    const [openDeletePromotion, setOpenDeletePromotionDialog] = useState(false)
    
    
  
    return (
        <Card key={promotion.id}>
          <CardActionArea
            sx={{
              cursor: 'pointer',
              display: 'flex',
              padding: 2,
              justifyContent: 'space-between',
            }}
          >
            <PromotionDrawer
              open={openEditPromotionDialog}
              handleClose={() => setOpenEditPromotionDialog(false)}
              refetch={refetch}
              initialValues={promotion}
              editMode
              restaurantId={restaurantId||''}
            />
            {/* <DeletePromotionDialog
              key={promotion.id}
              handleClose={() => setOpenDeletePromotionDialog(false)}
              open={openDeletePromotion}
              refetch={refetch}
              promotionId={promotion.id}
            /> */}
            <Box>
              <Typography fontWeight="bold">
                {promotion.name}
              </Typography>
              {/* <Typography variant="subtitle1">
                {item.type} - Funcionando até{' '}
                {format(new Date(item.closingTime), 'HH:mm')}
              </Typography> */}
            </Box>
            {(
              <Box display="flex">
                <Edit
                  onClick={() => setOpenEditPromotionDialog(true)}
                  sx={{ cursor: 'pointer', marginRight: 2 }}
                  aria-label="edit-promotion"
                />
                <DeleteOutline
                  sx={{
                    color: 'red',
                  }}
                  onClick={() => setOpenDeletePromotionDialog(true)}
                  aria-label="delete-promotion"
                />
              </Box>
            )}
          </CardActionArea>
        </Card>
      )
  }
  