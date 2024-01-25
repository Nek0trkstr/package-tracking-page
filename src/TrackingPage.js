import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const TrackingPage = () => {
    const trackingStages = [
        { id: 1, status: "🌱 Order Processed", description: "Your order has been processed and is ready for shipment." },
        // { id: 2, status: "🛫 In Transit", description: "Your package is on its way to the destination." },
        // { id: 3, status: "🛂 Cleared Customs", description: "Your package has cleared customs and is en route to you." },
        // { id: 4, status: "🏎 Out for Delivery", description: "Your package is out for delivery and will arrive soon." },
        // { id: 5, status: "🤍 Delivered", description: "Your package has been delivered. Enjoy!" }
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Package Tracking
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Order Number:</strong> 12345
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    <strong>Estimated Delivery:</strong> Within 24 hours
                </Typography>
                <List>
                    {trackingStages.map((stage, index) => (
                        <React.Fragment key={stage.id}>
                            {index > 0 && <Divider />}
                            <ListItem>
                                <ListItemText
                                    primary={stage.status}
                                    secondary={stage.description}
                                />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default TrackingPage;
