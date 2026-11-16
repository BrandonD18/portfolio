---
name: fable-playbook
description: A working method for planning a task, breaking it into steps, and checking your own work before calling it done. Use for any task with more than one step, any build or code change, any piece of writing or analysis someone will act on, or whenever the user says "use the fable-playbook".
---

# The playbook

This is how to run a task so the result is right the first time it is handed
over. It has three parts: plan, build in steps, check. Before starting, tell the
user in one or two lines which parts apply to this task and what "done" will
look like. Small tasks use a small version of each part. They do not skip one.

## 1. Plan

**Say what done looks like first.** Write one sentence that describes the
finished result as something a person could observe: "the page loads with no
console errors and the price changes on every click", not "build the page". If
you cannot write that sentence, you do not understand the task yet.

**Read before you decide.** Open the files, data or pages the task touches
before forming a plan. Plans made from the request alone are guesses. Note what
already exists so you do not rebuild it or overwrite it.

**Separate what you know from what you assume.** List the two or three
assumptions the plan rests on. For each one, either check it now (cheap checks
first) or mark it as an assumption you will tell the user about. An assumption
that would change the whole approach if wrong gets checked before any building.

**Find the hard part.** Most tasks have one step that could sink the rest: an
unknown API, an unclear requirement, a shape that may not work. Name it and
plan to do it first, in the smallest form that proves it works. Easy parts
built on an unproven hard part are wasted if it fails.

**Decide what is the user's call.** Things that are hard to undo, that cost
money, that publish something, or that touch a password or key go to the user
before you act. Everything else you decide yourself: pick the sensible default,
note it, and keep going. Do not ask about choices you can reverse in a minute.

**Fit the plan to the task.** A one-file fix needs three lines of plan. A
multi-hour build needs the steps written down. Do not write a plan longer than
the work.

## 2. Break it into steps

**Each step ends in something you can check.** "Write the parser" is a step
only if it ends with the parser run against a real input. If a step cannot be
checked on its own, it is too big or cut in the wrong place.

**Order by risk, then by dependency.** The unproven step goes first. After
that, build the thinnest version that works end to end, then widen it. A rough
whole that runs beats a polished half.

**One change, one check.** Make a change, run its check, then make the next.
When five changes go in before the first run and something breaks, you no
longer know which one did it.

**When a step fails, read the error.** Read all of it, including the line it
points at. State what you think caused it before changing anything. If the
same fix fails twice, stop repeating it: your picture of the problem is wrong,
so go back and look at what is actually happening.

**Keep the scope.** Do what was asked. If you notice something else worth
fixing, mention it at the end and leave it alone unless it blocks the task.

**Leave things as you found them.** Do not overwrite or delete a file you did
not create without looking at it first. Put scratch work somewhere separate.

## 3. Check your own work

**Run it for real.** The check is the thing itself doing its job: open the page
and click the buttons, run the script on real input, read the document from the
top as its reader would. Code that reads correctly has not been checked.

**Check against the request, not against your plan.** Reread the original ask
word by word and tick off each thing it named. The plan may have drifted, and a
requirement dropped early is the most common miss.

**Look where it is likely to be wrong.** Try the empty input, the very long
one, the small screen, the second click, the case just past the example you
were given. Check the part you were least sure of while building.

**Look at the output yourself.** For anything visual, take a screenshot and
look at it. For numbers, work one by hand and compare. For writing, read it
cold and ask whether a reader who was not here would follow it.

**Fix what you find, then check again.** A fix is a change, and changes get
checked. Rerun the check that failed plus one that passed before.

**Report it straight.** Say what works and how you know. Say what failed, what
you did not test and why, and what you assumed. Never round "should work" up to
"works". If something is left for the user to do, say exactly what.

## Before you hand over

- Does the result match the "done" sentence from the plan?
- Did you run it, and see it work, after the last change?
- Is every item in the original request either done or named as not done?
- Does the summary lead with the result and say plainly what is still open?
