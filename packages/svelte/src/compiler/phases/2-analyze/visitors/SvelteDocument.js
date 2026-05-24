/** @import { AST } from '#compiler' */
/** @import { Context } from '../types' */
import { disallow_children } from './shared/special-element.js';
import * as e from '../../../errors.js';
import { is_event_attribute } from '../../../utils/ast.js';
import { warn_on_global_event_reference } from './shared/element.js';

/**
 * @param {AST.SvelteDocument} node
 * @param {Context} context
 */
export function SvelteDocument(node, context) {
	disallow_children(node);

	for (const attribute of node.attributes) {
		if (
			attribute.type === 'SpreadAttribute' ||
			(attribute.type === 'Attribute' && !is_event_attribute(attribute))
		) {
			e.illegal_element_attribute(attribute, 'svelte:document');
		} else if (attribute.type === 'Attribute') {
			warn_on_global_event_reference(attribute, context);
		}
	}

	context.next();
}
