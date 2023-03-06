import * as React from 'react';
import Chip from '@mui/material/Chip';

const Ingredients = (defaultData: any) => {
    let keys = Object.keys(defaultData.defaultData);
    let Chipslist = keys.filter((item) => item.indexOf("strIngredient") !== -1)
    return (
        <div>
            {Chipslist.map((item, index) => {
                if (defaultData.defaultData[item] != null) {
                    return <Chip key={index}
                        label={defaultData.defaultData[item]}
                    />
                }
            }
            )}
        </div>
    );
}
export default Ingredients;
