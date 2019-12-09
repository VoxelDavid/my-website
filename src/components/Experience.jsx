import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import Company from '../Company';
import bulma from '../bulma.scss';
import style from './Experience.scss';

function formatDate(date) {
	return moment(date).format('MMM YYYY');
}

export default class Experience extends React.Component {
	static propTypes = {
		exp: PropTypes.shape({
			startDate: PropTypes.instanceOf(Date).isRequired,
			endDate: PropTypes.instanceOf(Date),
			wasInHouse: PropTypes.bool.isRequired,
			job: PropTypes.string.isRequired,
			company: PropTypes.instanceOf(Company).isRequired,
			description: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.element,
			]).isRequired,
		})
	}
	render() {
		const { exp } = this.props;
		const startDate = formatDate(exp.startDate);
		const endDate = exp.endDate ? formatDate(exp.endDate) : 'Present';
		const connector = exp.wasInHouse ? 'at' : 'for';

		return (
			<div className={classNames(style.container, bulma.columns)}>
				<p className={bulma.column}>{startDate}&ndash;{endDate}</p>

				<div className={classNames(bulma.column, bulma['is-two-thirds'])}>
					<p className={style.job}>{exp.job} {connector} <a href={exp.company.url}>{exp.company.name}</a>.</p>

					<p className={style.description}>{exp.description}</p>
				</div>
			</div>
		);
	}
}