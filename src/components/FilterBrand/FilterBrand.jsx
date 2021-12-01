import React, { useContext, useState } from 'react';
import './Filterbrand.css'
import { FormControlLabel, Grid, Paper, Radio, FormControl, RadioGroup, FormLabel, Slider, Box } from "@mui/material"
import { productContext } from '../../context/ProductContext';
import history from '../../helpers/history';



const FilterBrand = () => {
    const { getData } = useContext(productContext)
    const [ brand, setBrand ] = useState(getBrands())

    function getBrands(){
        let search = new URLSearchParams(history.location.search)
        return search.get('brand')
    }


    function handleChangeBrands(e){
        if(e.target.value === 'all'){
            history.push(`${history.location.pathname.replace('brand')}`)
            getData()
            return
        }
        let search = new URLSearchParams(history.location.search)
        search.set('brand', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getData(search.toString())
        setBrand(e.target.value)
    }



    return (
   
             <div className="filter_brand">
                  <Grid item md={4}>
                       <Paper className="grid" style={{backgroundColor: "#0F0F0F"}}>
                            <FormControl className="menu_dis" component="fieldset">
                                <FormLabel className="bg-dark text-light" component="legend">Brand</FormLabel>
                                    <RadioGroup value={brand} onChange={handleChangeBrands} aria-label="memory" name="memory1">
                                        <FormControlLabel className="radio_input" value="Americano" control={<Radio />} label="Americano" />
                                        <FormControlLabel value="Cappuccino" control={<Radio />} label="Cappuccino" />
                                        <FormControlLabel value="Latte" control={<Radio />} label="Latte" />
                                        <FormControlLabel value="all" control={<Radio />} label="All" />
                                    </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
            </div>
     
    );
};

export default FilterBrand;