import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
// import metadata from './block.json';


registerBlockType( 'create-block/boilerplate', {
	edit: Edit,
	save,
} );
