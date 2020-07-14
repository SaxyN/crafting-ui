import React from 'react';
import * as apis from '../apis/apis';
import './App.scss';
import { Accordion, Button, makeStyles, AppBar, IconButton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import ExitToApp from '@material-ui/icons/ExitToApp';

import Toolbar from '@material-ui/core/Toolbar';
import BuildIcon from '@material-ui/icons/Build';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    show: {
        display: 'auto',
        position: 'relative',
        width: '1180px',
        height: '700px',
        top: '80px',
        margin: 'auto',
        borderStyle: 'solid',
        backgroundColor: '#b6b6b6',
    },
    root: {
        display: 'auto',
    },
    hide: {
        display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    tab: {
        flexGrow: 0,
    },
    craftButton: {
        marginLeft: 'auto',
    },

}))


export default function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [openMenu, setOpenMenu] = React.useState(false);
    const [category, setCategory] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);
    const [itemType, setItemType] = React.useState('weapons');
    //const [itemToCraft, setItemToCraft] = React.useState('');

    // const handleButton = () => {

    // };

    const handleCategory = (newCategory) => {
        setCategory(newCategory);
        if (newCategory === 0) {
            setItemType('weapons')
        }
        if (newCategory === 1) {
            setItemType('items')
        }
        if (newCategory === 2) {
            setItemType('components')
        }
        
    }

    const closeApplication = () => {
        apis.closeCraft();
        setOpenMenu(false);
        setCategory(0);
    }

    const handleReturnItem = (craftedItem) => {
        if (craftedItem !== null) {
            //console.log(craftedItem);
            apis.craftItem(craftedItem);
            setOpenMenu(false);
            apis.closeCraft();
        }
    };

    const sendItem = () => {

    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    window.addEventListener('message', (event) => {
        if (event.data.openCraft === true) {
            setOpenMenu(true);
            //console.log("Open");
        }
        if (event.data.openCraft === false) {
            setOpenMenu(false);
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
          apis.closeCraft()
          setOpenMenu(false)
          setCategory(0)
        }
    });

    return (
        <div className ={openMenu === true ? classes.show : classes.hide}>
            <div>
                <AppBar
                position='relative'
                color='default'
                className={classes.appBar}
                >
                    <Toolbar style={{backgroundColor: '#b6b6b6'}}>
                        <BuildIcon />
                        <Typography style={{marginLeft: '10px'}} variant='h6' noWrap>Crafting Menu</Typography>
                        <IconButton style={{marginLeft: 'auto' }} onClick={() => closeApplication()}>
                            <ExitToApp />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.tab}>
                    <Tabs
                        value={category}
                        onChange={(event, newCategory) => handleCategory(newCategory)}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Weapons" />
                        <Tab label="Items" />
                        <Tab label="Components" />
                    </Tabs>
                </Paper>
                <div>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                        >
                            <Typography className={classes.heading}>Assault Rifle</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>22x Steel  |  16x Iron  |  20x Packaged Plank  |  12x Plastic  |  16x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_assaultrifle")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel2bh-content'
                        id='panel2bh-header'
                        >
                            <Typography className={classes.heading}>Bullpup Rifle</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>17x Steel  |  20x Iron  |  14x Packaged Plank  |  14x Plastic  |  7x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_bullpuprifle")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel3bh-content'
                        id='panel3bh-header'
                        >
                            <Typography className={classes.heading}>Micro SMG</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>16x Steel  |  14x Iron  |  7x Packaged Plank  |  14x Plastic  |  7x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_microsmg")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel4bh-content'
                        id='panel4bh-header'
                        >
                            <Typography className={classes.heading}>Compact Rifle</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>14x Steel  |  26x Iron  |  14x Packaged Plank  |  7x Plastic  |  14x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_compactrifle")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel6bh-content'
                        id='panel6bh-header'
                        >
                            <Typography className={classes.heading}>Gusenberg</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>14x Steel  |  24x Iron  |  7x Packaged Plank  |  7x Plastic  |  12x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_gusenberg")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel7bh-content'
                        id='panel7bh-header'
                        >
                            <Typography className={classes.heading}>Sawnoff Shotgun</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>12x Steel  |  17x Iron  |  20x Packaged Plank  |  7x Plastic  |  7x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_sawnoffshotgun")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 0 ? classes.root : classes.hide} expanded={expanded ==='panel22'} onChange={handleChange('panel22')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel22bh-content'
                        id='pane22bh-header'
                        >
                            <Typography className={classes.heading}>Machete</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>9x Steel  |  7x Packaged Plank  | 3x Oil</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weapon_machete")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion className={category === 1 ? classes.root : classes.hide} expanded={expanded ==='panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel8bh-content'
                        id='panel8bh-header'
                        >
                            <Typography className={classes.heading}>Keys</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>25x Copper |  5x Random Amazing Item</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("keys")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 1 ? classes.root : classes.hide} expanded={expanded ==='panel10'} onChange={handleChange('panel10')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel10bh-content'
                        id='panel10bh-header'
                        >
                            <Typography className={classes.heading}>Magazine</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Lead | 2x Gunpowder | 2x Steel</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("clip")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 1 ? classes.root : classes.hide} expanded={expanded ==='panel11'} onChange={handleChange('panel11')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel11bh-content'
                        id='panel11bh-header'
                        >
                            <Typography className={classes.heading}>TNT</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>3x Car Battery | 3x Lithium Batteries | 7x Gas | 7x Paper | 3x Gold | 7x Gunpowder | 3x Wires</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("c4_bank")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 1 ? classes.root : classes.hide} expanded={expanded ==='panel12'} onChange={handleChange('panel12')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel12bh-content'
                        id='panel12bh-header'
                        >
                            <Typography className={classes.heading}>Improvised Armor</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>3x Steel Armor Plate | 7x fabric</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("imp_armor")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    {/* <Accordion style={{ backgroundColor: '#FFE738'}} className={category === 1 ? classes.root : classes.hide} expanded={expanded ==='panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel9bh-content'
                        id='panel9bh-header'
                        >
                            <Typography className={classes.heading}>Spirit Coffee</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>4x Vodka |  1x <strong>Spirit Points</strong></Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("spirit_coffee")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion> */}

                
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel13'} onChange={handleChange('panel13')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel13bh-content'
                        id='panel13bh-header'
                        >
                            <Typography className={classes.heading}>Paper</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Water | 20x Wood Chips | 2x Chemistry Set</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("paper")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel14'} onChange={handleChange('panel14')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel14bh-content'
                        id='panel14bh-header'
                        >
                            <Typography className={classes.heading}>Bag of Weed</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Plastic | 7x Weed</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("weed_pooch")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel15'} onChange={handleChange('panel15')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel15bh-content'
                        id='panel15bh-header'
                        >
                            <Typography className={classes.heading}>Plastic</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>7x Crude Oil | 2x Chemsitry Set</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("plastic")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel16'} onChange={handleChange('panel16')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel16bh-content'
                        id='panel16bh-header'
                        >
                            <Typography className={classes.heading}>Coal</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>7x Wood Chips | 2x Gas</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("coal")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel17'} onChange={handleChange('panel17')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel17bh-content'
                        id='panel17bh-header'
                        >
                            <Typography className={classes.heading}>Steel</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Coal | 2x Iron | 2x Limestone</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("steel")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel18'} onChange={handleChange('panel18')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel18bh-content'
                        id='panel18bh-header'
                        >
                            <Typography className={classes.heading}>Lead</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Copper | 2x Iron | 2x Chemistry Set</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("lead")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel19'} onChange={handleChange('panel19')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel19bh-content'
                        id='panel19bh-header'
                        >
                            <Typography className={classes.heading}>Cement</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Water | 2x limestone | 2x Chemistry Set</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("cement")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel20'} onChange={handleChange('panel20')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel20bh-content'
                        id='panel20bh-header'
                        >
                            <Typography className={classes.heading}>Wires</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>2x Copper | 2x Plastic</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("wires")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel21'} onChange={handleChange('panel21')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel21bh-content'
                        id='panel21bh-header'
                        >
                            <Typography className={classes.heading}>Gunpowder</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>7x Coal | 2x Chemistry Set</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("gunpowder")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={category === 2 ? classes.root : classes.hide} expanded={expanded ==='panel23'} onChange={handleChange('panel23')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel23bh-content'
                        id='panel23bh-header'
                        >
                            <Typography className={classes.heading}>Armor Plate</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>3x Steel | 2x Iron | 2x Chemistry Set</Typography>
                        <Button className={classes.craftButton} onClick={() => handleReturnItem("armor_plate")}  variant="contained" color="primary">CRAFT</Button>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

        </div>
    )
}