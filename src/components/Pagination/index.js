import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
	pages: {
		display: 'flex',
		flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 50,
	},
	button: props => ({
    backgroundColor: props.selected ? '#000' : '#f0f',
  }),
})

const Pagination = ({ comicsPerPage, totalComics, paginate }) => {
	const classes = useStyles()
	const pageNumbers = []

	//popular o vetor com a quantidade certa de botões para os quadrinhos
	for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i++) {
		pageNumbers.push(i)
	}
	
	
	return (
		<nav>
			<ButtonGroup className={classes.pages}>
				{pageNumbers.map((number, index) => (
					//renderizar os botões utilizando o vetor 
					<Button className={classes.button}
					key={number} 
					onClick={() => paginate(number)} 
					>
						{number}
					</Button>
				))}
			</ButtonGroup>
		</nav>
	)
}

export default Pagination