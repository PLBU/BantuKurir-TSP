import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default (props) => {
    const { style, heading, title, subtitle, content } = props

    return (
        <Card style={style}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{heading}</Typography>
                <Typography variant="h4" component="h2">{title}</Typography>
                <Typography color="textSecondary">{subtitle}</Typography>
                <Typography variant="body2" component="p" style={{ marginTop: 8, whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: content}}/>
            </CardContent>
        </Card>
    )
}