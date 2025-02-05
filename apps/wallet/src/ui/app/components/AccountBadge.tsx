// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { BadgeLabel } from './BadgeLabel';
import { type AccountType } from '_src/background/accounts/Account';

type AccountBadgeProps = {
	accountType: AccountType;
};

const TYPE_TO_TEXT: Record<AccountType, string | null> = {
	ledger: 'Ledger',
	imported: 'Imported',
	qredo: 'Qredo',
	'mnemonic-derived': null,
	zk: 'zkLogin',
};

export function AccountBadge({ accountType }: AccountBadgeProps) {
	const badgeText = TYPE_TO_TEXT[accountType];

	if (!badgeText) return null;

	return <BadgeLabel label={badgeText} />;
}
