# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 38`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 30
			index: 30
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 30
						index: 30
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "x"
					loc: Object {
						filename: "input.js"
						identifierName: "x"
						end: Object {
							column: 1
							index: 1
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				right: JSObjectExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 30
							index: 30
							line: 1
						}
						start: Object {
							column: 4
							index: 4
							line: 1
						}
					}
					properties: Array [
						JSObjectMethod {
							kind: "set"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "if"
									loc: Object {
										filename: "input.js"
										identifierName: "if"
										end: Object {
											column: 12
											index: 12
											line: 1
										}
										start: Object {
											column: 10
											index: 10
											line: 1
										}
									}
								}
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 12
										index: 12
										line: 1
									}
									start: Object {
										column: 10
										index: 10
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 15
										index: 15
										line: 1
									}
									start: Object {
										column: 12
										index: 12
										line: 1
									}
								}
								params: Array [
									JSBindingIdentifier {
										name: "w"
										loc: Object {
											filename: "input.js"
											identifierName: "w"
											end: Object {
												column: 14
												index: 14
												line: 1
											}
											start: Object {
												column: 13
												index: 13
												line: 1
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 14
													index: 14
													line: 1
												}
												start: Object {
													column: 13
													index: 13
													line: 1
												}
											}
										}
									}
								]
							}
							body: JSBlockStatement {
								directives: Array []
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 28
										index: 28
										line: 1
									}
									start: Object {
										column: 16
										index: 16
										line: 1
									}
								}
								body: Array [
									JSExpressionStatement {
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 26
												index: 26
												line: 1
											}
											start: Object {
												column: 18
												index: 18
												line: 1
											}
										}
										expression: JSAssignmentExpression {
											operator: "="
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 26
													index: 26
													line: 1
												}
												start: Object {
													column: 18
													index: 18
													line: 1
												}
											}
											left: JSAssignmentIdentifier {
												name: "m_if"
												loc: Object {
													filename: "input.js"
													identifierName: "m_if"
													end: Object {
														column: 22
														index: 22
														line: 1
													}
													start: Object {
														column: 18
														index: 18
														line: 1
													}
												}
											}
											right: JSReferenceIdentifier {
												name: "w"
												loc: Object {
													filename: "input.js"
													identifierName: "w"
													end: Object {
														column: 26
														index: 26
														line: 1
													}
													start: Object {
														column: 25
														index: 25
														line: 1
													}
												}
											}
										}
									}
								]
							}
						}
					]
				}
			}
		}
	]
}
```
